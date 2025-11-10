# Étape 1: Build de l'application Angular
FROM node:20-alpine AS builder

# Définir le répertoire de travail
WORKDIR /app

# Installer Angular CLI globalement
RUN npm install -g @angular/cli

# Copier les fichiers de dépendances
COPY package*.json ./

# Installer toutes les dépendances (y compris devDependencies)
RUN npm ci

# Copier le code source
COPY . .

# Build de l'application pour la production
RUN npm run build --configuration=production

# Étape 2: Serveur web Nginx
FROM nginx:alpine

# Supprimer la configuration par défaut de Nginx
RUN rm -rf /etc/nginx/conf.d/default.conf

# Copier la configuration Nginx personnalisée
COPY nginx.conf /etc/nginx/nginx.conf

# Copier les fichiers buildés depuis l'étape précédente
COPY --from=builder /app/dist/portfolio/browser /usr/share/nginx/html

# Exposer le port 80
EXPOSE 80

# Démarrage de Nginx
CMD ["nginx", "-g", "daemon off;"]