FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run buildprod
EXPOSE 4200
CMD ["npm", "prod", "--", "--host", "0.0.0.0", "--disable-host-check"]
