# Dockerfile
FROM alpine:latest AS builder

# Copy the source HTML
COPY index.html ./

# Minify HTML using sed and tr
RUN cat index.html | \
    # Remove comments
    sed 's/<!--.*-->//g' | \
    # Remove whitespace between tags
    sed 's/>\s*</></g' | \
    # Remove line breaks and extra spaces
    tr -d '\n\r\t' | \
    # Remove multiple spaces
    tr -s ' ' \
    > index.min.html

# Final stage
FROM nginx:alpine

# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy minified HTML from builder stage
COPY --from=builder index.min.html /usr/share/nginx/html/index.html
# Copy other static assets directly
COPY logos.svg /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]