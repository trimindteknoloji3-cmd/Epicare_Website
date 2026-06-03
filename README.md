# Epicare Web Sitesi

Bu proje, Epicare için hazırlanmış profesyonel ve mobil uyumlu tanıtım sitesidir. Backend gerekmez, GitHub Pages ile ücretsiz yayınlanabilir.

## Dosyalar

- `index.html`: Sitenin ana sayfası
- `styles.css`: Tasarım ve responsive ayarlar
- `script.js`: Menü, scroll ve animasyonlar
- `assets/logo-transparent.png`: Sitede kullanılan arka plansız logo
- `assets/product-watch-transparent.png`: Sitede kullanılan arka plansız akıllı saat görseli
- `assets/logo.jpeg`: Orijinal logo görseli
- `assets/product-watch.jpeg`: Orijinal akıllı saat görseli
- `assets/logo.svg`: Yedek logo
- `assets/product-watch.svg`: Yedek akıllı saat çizimi
- `assets/app-home.jpeg`: Mobil uygulama ana ekranı
- `assets/app-health.jpeg`: Mobil uygulama sağlık verileri ekranı
- `assets/app-assistant.jpeg`: Mobil uygulama AI asistan ekranı
- `assets/app-alert.jpeg`: Mobil uygulama nöbet alarmı ekranı
- `assets/app-sound.jpeg`: Mobil uygulama ses takibi ekranı
- `assets/app-medicine.jpeg`: Mobil uygulama ilaç takibi ekranı

## Görselleri Nereye Koymalısın?

Site şu anda `assets/logo-transparent.png` ve `assets/product-watch-transparent.png` dosyalarını kullanıyor.

Gerçek logo ve saat görselini sonradan PNG olarak kullanmak istersen `assets` klasörüne koy:

- Logo dosyası: `assets/logo.png`
- Akıllı saat görseli: `assets/product-watch.png`

Sonra `index.html` içinde `assets/logo-transparent.png` yazan yeri `assets/logo.png`, `assets/product-watch-transparent.png` yazan yeri `assets/product-watch.png` olarak değiştirebilirsin.

Mobil uygulama ekran görüntüleri `assets` klasörüne eklendi ve site içinde telefon mockup alanlarında kullanılıyor.

## Bilgisayarda Açma

1. Proje klasörünü aç.
2. `index.html` dosyasına çift tıkla.
3. Site tarayıcıda açılır.

Ek kurulum, npm veya terminal komutu gerekmez.

## GitHub'a Yükleme

1. GitHub hesabına gir.
2. Sağ üstten `+` butonuna bas.
3. `New repository` seç.
4. Repository adını yaz, örnek: `epicare-website`.
5. `Public` seç.
6. `Create repository` butonuna bas.
7. Açılan sayfada `uploading an existing file` bağlantısına tıkla.
8. Bu klasördeki tüm dosyaları GitHub sayfasına sürükle bırak.
9. `Commit changes` butonuna bas.

## GitHub Pages ile Yayınlama

1. GitHub'da projenin sayfasına gir.
2. `Settings` sekmesine tıkla.
3. Sol menüden `Pages` bölümüne gir.
4. `Build and deployment` altında `Source` olarak `Deploy from a branch` seç.
5. `Branch` kısmında `main` seç.
6. Klasör olarak `/root` seç.
7. `Save` butonuna bas.
8. Birkaç dakika sonra GitHub sana site linkini verir.

Örnek link şöyle görünür:

`https://kullanici-adin.github.io/epicare-website/`
