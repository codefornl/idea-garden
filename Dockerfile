# Stage 1, "build-stage", based on Node.js, to build and compile the frontend
FROM node:14-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:alpine
COPY --from=build-stage /app/build/ /usr/share/nginx/html
EXPOSE 80 443
CMD ["nginx", "-g", "daemon off;"]