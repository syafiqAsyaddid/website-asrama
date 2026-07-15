<?php
// PHP API for Asrama IPB Ekasari Admin Dashboard
// Manages authentication and CRUD file saving on Hostinger

session_start();
header('Content-Type: application/json');

// Security headers
header('X-Content-Type-Options: nosniff');
header('X-Frame-Options: DENY');
header('X-XSS-Protection: 1; mode=block');

$default_password = 'admin123'; // Default password (change this for security)
$password = $default_password;

// Load custom password config if it exists
$config_file = __DIR__ . '/config.php';
if (file_exists($config_file)) {
    include $config_file;
}

$action = $_POST['action'] ?? '';

// === PUBLIC ACTIONS ===

if ($action === 'login') {
    $pass = $_POST['password'] ?? '';
    if ($pass === $password) {
        $_SESSION['ekasari_admin'] = true;
        echo json_encode(['success' => true, 'message' => 'Login berhasil.']);
    } else {
        echo json_encode(['success' => false, 'message' => 'Kata sandi salah!']);
    }
    exit;
}

if ($action === 'check_session') {
    if (isset($_SESSION['ekasari_admin']) && $_SESSION['ekasari_admin'] === true) {
        echo json_encode(['success' => true, 'isLoggedIn' => true]);
    } else {
        echo json_encode(['success' => true, 'isLoggedIn' => false]);
    }
    exit;
}

if ($action === 'logout') {
    $_SESSION['ekasari_admin'] = false;
    session_destroy();
    echo json_encode(['success' => true, 'message' => 'Logout berhasil.']);
    exit;
}

// === AUTHENTICATED ACTIONS REQUIRED ===

if (!isset($_SESSION['ekasari_admin']) || $_SESSION['ekasari_admin'] !== true) {
    http_response_code(401);
    echo json_encode(['success' => false, 'message' => 'Akses ditolak. Silakan login terlebih dahulu.']);
    exit;
}

// Define storage directory (one level up from admin/)
$data_dir = dirname(__DIR__) . '/data';

if ($action === 'upload_image') {
    if (!isset($_FILES['image'])) {
        echo json_encode(['success' => false, 'message' => 'Tidak ada file gambar yang diunggah.']);
        exit;
    }

    $file = $_FILES['image'];
    $allowed_types = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];

    if (!in_array($file['type'], $allowed_types)) {
        echo json_encode(['success' => false, 'message' => 'Format file tidak didukung. Harap unggah gambar (JPG, PNG, GIF, atau WebP).']);
        exit;
    }

    // Define uploads directory (one level up from admin/)
    $uploads_dir = dirname(__DIR__) . '/uploads';

    // Create uploads directory if it doesn't exist
    if (!file_exists($uploads_dir)) {
        if (!mkdir($uploads_dir, 0755, true)) {
            echo json_encode(['success' => false, 'message' => 'Gagal membuat direktori uploads di server.']);
            exit;
        }
    }

    $file_ext = strtolower(pathinfo($file['name'], PATHINFO_EXTENSION));
    $filename = time() . '_' . uniqid() . '.' . $file_ext;
    $target_path = $uploads_dir . '/' . $filename;

    if (move_uploaded_file($file['tmp_name'], $target_path)) {
        echo json_encode(['success' => true, 'url' => 'uploads/' . $filename]);
    } else {
        echo json_encode(['success' => false, 'message' => 'Gagal menyimpan file gambar di server. Periksa izin tulis (write permissions) folder uploads/.']);
    }
    exit;
}

// Create data directory if it doesn't exist
if (!file_exists($data_dir)) {
    if (!mkdir($data_dir, 0755, true)) {
        echo json_encode(['success' => false, 'message' => 'Gagal membuat direktori data di server.']);
        exit;
    }
}

if ($action === 'save_news') {
    $data_raw = $_POST['data'] ?? '';
    if (empty($data_raw)) {
        echo json_encode(['success' => false, 'message' => 'Data berita kosong.']);
        exit;
    }

    // Validate JSON structure
    json_decode($data_raw);
    if (json_last_error() !== JSON_ERROR_NONE) {
        echo json_encode(['success' => false, 'message' => 'JSON berita tidak valid.']);
        exit;
    }

    $file_path = $data_dir . '/news.json';
    if (file_put_contents($file_path, $data_raw) !== false) {
        echo json_encode(['success' => true, 'message' => 'Berita berhasil disimpan di server.']);
    } else {
        echo json_encode(['success' => false, 'message' => 'Gagal menulis ke file news.json. Periksa izin tulis (write permissions) folder data/.']);
    }
    exit;
}

if ($action === 'save_achievements') {
    $data_raw = $_POST['data'] ?? '';
    if (empty($data_raw)) {
        echo json_encode(['success' => false, 'message' => 'Data prestasi kosong.']);
        exit;
    }

    // Validate JSON structure
    json_decode($data_raw);
    if (json_last_error() !== JSON_ERROR_NONE) {
        echo json_encode(['success' => false, 'message' => 'JSON prestasi tidak valid.']);
        exit;
    }

    $file_path = $data_dir . '/prestasi.json';
    if (file_put_contents($file_path, $data_raw) !== false) {
        echo json_encode(['success' => true, 'message' => 'Prestasi berhasil disimpan di server.']);
    } else {
        echo json_encode(['success' => false, 'message' => 'Gagal menulis ke file prestasi.json. Periksa izin tulis (write permissions) folder data/.']);
    }
    exit;
}

echo json_encode(['success' => false, 'message' => 'Aksi server tidak dikenal.']);
exit;
