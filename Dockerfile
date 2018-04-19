FROM node:8.11.1-slim
RUN yum update \    && yum install -y nginx
WORKDIR /app
COPY . /app/
EXPOSE 80
RUN  yarn install \     && yarn build \     && cp -r dist/* /var/www/html \     && rm -rf /app
CMD ["nginx","-g","daemon off;"] 