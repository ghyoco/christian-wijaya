document.addEventListener('DOMContentLoaded', function() {
    const openMenu = document.getElementById('openMenu');
    const closeMenu = document.getElementById('closeMenu');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    const sidebarMenuTitle = document.getElementById('sidebarMenuTitle');
    
    // Fungsi untuk menutup sidebar & overlay
    function closeSidebar() {
        sidebar.classList.remove('active');
        if (overlay) overlay.style.display = 'none';
    }

    // Open sidebar
    openMenu.addEventListener('click', function() {
        sidebar.classList.add('active');
        if (overlay) overlay.style.display = 'block';
    });
    
    // Close sidebar
    closeMenu.addEventListener('click', closeSidebar);

    // Close sidebar when clicking overlay
    if (overlay) overlay.addEventListener('click', closeSidebar);

    // Close sidebar after navigation link is clicked on mobile
    const navLinks = document.querySelectorAll('.sidebar nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth < 768) {
                closeSidebar();
            }
        });
    });

    if (sidebarMenuTitle) {
        sidebarMenuTitle.addEventListener('click', closeSidebar);
    }
});