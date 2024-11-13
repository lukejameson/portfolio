# Dockerfile
FROM alpine:latest AS builder

# Copy the source HTML
COPY index.html ./

# Final stage
FROM nginx:alpine

# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy minified HTML from builder stage
COPY --from=builder index.html /usr/share/nginx/html/index.html
# Copy other static assets directly
COPY logos.svg /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]