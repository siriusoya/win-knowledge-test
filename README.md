# Cara Menjalankan Aplikasi

## Aplikasi ini menggunakan Sequelize sebagai ORM. Untuk membuat database secara lokal di komputer anda, anda harus menjalankan perintah-perintah berikut di terminal:
- npm install
- npm install --save-dev sequelize-cli
- npx sequelize-cli db:create
- npx sequelize-cli db:migrate
- npx sequelize-cli db:seed:all