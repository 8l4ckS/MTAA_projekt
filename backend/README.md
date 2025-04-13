# 1. Klonuj repozitár
git clone https://github.com/SmatyM/MTAA_projekt.git

# 2. Prejdi do priečinka backendu
cd MTAA_projekt/backend

# 3. Nainštaluj balíky
npm install

# 4. Skopíruj .env.example ako .env
copy .env.example .env   # vo Windows (alebo cp .env.example .env v Linux/Mac)

# 5. Upraviť .env (napr. DB heslo, ak treba)

# 6. Spusti server
npm start
