import http.server
import socketserver
import os


class CleanURLHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        original_path = self.path
        path_only = original_path.split('?', 1)[0].split('#', 1)[0]

        # Case 1: /about, /services, /contact (no trailing slash, no extension)
        if not path_only.endswith('/') and '.' not in os.path.basename(path_only):
            candidate = path_only + '.html'
            if os.path.exists(self.translate_path(candidate)):
                self.path = candidate + original_path[len(path_only):]

        # Case 2: /about/, /services/, /contact/ (trailing slash, but not a real directory)
        elif path_only.endswith('/') and os.path.basename(path_only[:-1]) and not os.path.isdir(self.translate_path(path_only)):
            stripped = path_only.rstrip('/')
            candidate = stripped + '.html'
            if os.path.exists(self.translate_path(candidate)):
                # Preserve any query/hash part after the stripped path
                self.path = candidate + original_path[len(path_only):]

        return super().do_GET()


if __name__ == "__main__":
    port = 8000
    with socketserver.TCPServer(("", port), CleanURLHandler) as httpd:
        print(f"Serving on http://localhost:{port}")
        httpd.serve_forever()

