import http.server
import socketserver
import os

PORT = 8080

class PortfolioHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Inject standard CORS and cache headers for smooth local debugging
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        super().end_headers()

# Set working directory to the current file's directory
os.chdir(os.path.dirname(os.path.abspath(__file__)))

# Allow port reuse to prevent address-already-in-use errors on restarts
socketserver.TCPServer.allow_reuse_address = True

print(f"==========================================================")
print(f"🚀 Alttre Portfolio Local Server starting...")
print(f"👉 Direct your browser to: http://localhost:{PORT}")
print(f"==========================================================")

with socketserver.TCPServer(("", PORT), PortfolioHTTPRequestHandler) as httpd:
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n[SYS] Server stopped by user request.")
