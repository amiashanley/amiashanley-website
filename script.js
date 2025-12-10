// Get menu elements
const menuContainer = document.querySelector(".menu");
const contentPreview = document.querySelector(".content-preview");

let aboutDismissed = false;

function hideAboutSection() {
    if (!aboutDismissed) {
        const about = document.querySelector('.home-about');
        if (about) about.style.display = 'none';
        aboutDismissed = true;
    }
}

function isHomePage() {
  const p = (window.location.pathname || '').toLowerCase();

  // Normalise trailing "index.html"
  if (p.endsWith('/index.html')) return true;

  // If path does not contain any section folders, treat as home
  const inSection = /(\/projects\/|\/public-lectures\/|\/publications\/|\/pedagogy\/|\/about\/)/.test(p);
  return !inSection;
}

// === Ensure preview host exists on every page ===
function ensurePreviewHost() {
  let host = window.contentPreview || document.getElementById('contentPreview');

  if (!host) {
    host = document.createElement('div');
    host.id = 'contentPreview';
    host.className = 'content-preview';
    host.style.display = 'none'; // shown only when preview is active
    document.body.appendChild(host);
  }

  // Apply correct layout mode
const home = isHomePage();

// Home pages get the centred preview mode
host.classList.toggle('preview--home', home);

// Inner pages should not have ANY preview mode class
if (!home) {
    host.classList.remove('preview--inner');
}

return (window.contentPreview = host);
}


// ====== Master Data Structure ======
const menuData = [
  {
    title: "PROJECTS",
    submenu: [
      {
        title: "Aisles of Mimetica",
        details: ["2024 Southwark Park Galleries"],
        previewImage: "../images/aisles-of-mimetica-images/006-aisles-of-mimetica-amias-hanley-photo-devika-bilimoria.jpg"
      },
      {
        title: "HNF: Selection, Extraction, Exclusion",
        details: ["2024 Well Gallery"],
        previewImage: "../images/hnf-images/002-hnf-amias-hanley.png"
      },
      {
        title: "TerraTending: 2179",
        details: [
          "2023 International Conference on Sonorities Research",
          "2022 Eco_media IV Symposium",
          "2022 Latrobe Regional Gallery",
        ],
        previewImage: "../images/terratending-2179-images/001-terratending-2179-photo-juila-broad.jpg"
      },
      {
        title: "Sunkland",
        details: [
          "2023 McClelland Sculpture Park and Gallery",
          "2022 Ars Electronica Festival",
          "2021 McClelland Sculpture Park and Gallery",
        ],
        previewImage: "../images/sunkland-images/003-sunkland-mcclelland-collection-amias-hanley-photo-devika-bilimoria.jpg" 
      },
      {
        title: "Burial",
        details: ["2023 Brunswick Mechanics Institute"],
        previewImage: "../images/burial-images/003-burial-amias-hanley-devika-bilimoria.jpg"
      },
      {
        title: "Junction Re-Sonant",
        details: ["2023 Burrinja Cultural Centre"],
        previewImage: "../images/junction-re-sonant-images/031-junction-re-sonant-amias-hanley-photo-devika-bilimoria.jpg"
      },
      { 
        title: "Before Nightfall #15",
        details: ["2022 Gertrude Contemporary"],
        previewImage: "../images/before-nightfall-15-images/001-before-nightfall-15-amias-hanley-photo-gertrude.jpg"
      },
      {
        title: "Architectonics for Ondes Musicales",
        details: ["2022 Sonorous IV, The Substation"],
        previewImage: "../images/architectonics-for-ondes-musicales-images/48-architectonics-for-ondes-musicales-amias-hanley-photo-keelan-o-hehir.jpg"
      },
      { 
        title: "Bogong High Plains Sound Map",
        details: ["2022 Bogong Centre for Sound Culture"],
        previewImage: "../images/bhpsm-images/60-bhpsm-photo-amias-hanley.jpg"
      },
      {
        title: "Interworld",
        details: ["2021 Trocadero Art Space"],
        previewImage: "../images/interworld-images/002-interworld-amias-hanley-devika-bilimoria.jpg"
      },
      {
        title: "Bloom: We're Going to Die",
        details: [
          "2020 Avantwhatever Festival",
          "2022 Latrobe Regional Gallery",
        ],
        previewImage: "../images/bloom-images/bloom-thumbnail.jpg"
      },
      {
        title: "Resonant Incantations",
        details: ["2020 Speak Percussion"],
        previewImage: "../images/resonant-incantations-images/002-Resonant Incantations_Hanley_Woodnutt.jpg"
      },
      {
        title: "Sirmadamsir: Oriented Performativity",
        details: ["2019 HearSay International Audio Art Prize"],
        previewImage: "../images/sirmadamsir-images/sirmadamsir-amias-hanley-photo-devika-bilimoria.jpg"
      },
      {
        title: "Sonic Entanglements: Bodies of the Valley",
        details: ["2018 RMIT Black Box Theatre"],
        previewImage: "../images/sonic-entanglements-images/001-sonic-entanglements-amias-hanley-photo-devika-bilimoria.jpg"
      },
      {
        title: "H:O:M:E",
        details: ["2018 Mapping Melbourne"],
        previewImage: "../images/home-images/008-home-landless-amias-hanley-photo-renee-stamatis.jpg"
      }
    ],
  },
  {
    title: "PUBLICATIONS",
    submenu: [
      
      {
        title: "Aisles of Mimetica Tracing the Role of Acoustic Mimicry Across Species and Systems",
        details: ["2025 High Pitch Magazine"],
        previewImage: "../images/high-pitch-images/003-high-pitch-amias-hanley.png"
      },
      {
        title: "Reimagining Geosocial Relations Through Speculative Listening Practices",
        details: ["2025 Sulina Publishing House"],
        previewImage: "../images/re-imagining-geosocial-relations-images/001-sounds-of-the-end-of-the-world-amias-hanley.png"
      },
      {
        title: "Holding Tightly: Co-mingling, life-flourishing and filmic ecologies",
        details: ["2023 Journal Of Intercultural Studies"],
        previewImage: "../images/holding-tightly-images/holding-tightly-amias-hanley.jpg"
      },
      {
        title: "Translating Ambiance Through Queer Ecologies: A Speculative Cartographic Imaginary",
        details: ["2020 Unlikely Journal for Creative Arts"],
        previewImage: "../images/translating-ambiance-images/005-translating-ambiance-amias-hanley.png"
      },
      {
        title: "SUNKLAND.XYZ",
        details: ["2021 Disclaimer Journal"],
        previewImage: "../images/sunkland.xyz/002-sunkland-amias-hanley-patrick-hase.png"
      },
    ],
  },
  {
    title: "PUBLIC LECTURES",
    submenu: [
      { 
        title: "Trans*ferring the Field", 
        details: [
          "2024 In the Field 2 (CRiSAP)",
          "2022 All School LAB",
        ],
        previewImage: "../images/trans-ferring-the-field-images/003-trans-ferring-the-field-images-amias-hanley-photo-crisap.jpg"
      },
      { 
        title: "Listening Bodies, Listening Ecologies",
        details: ["2022 Audition Series"],
        previewImage: "../images/listening-bodies-images/001-listening-bodies-amias-hanley.jpg"
      },
      {
        title: "Attention, Attunement and Access: Queer, Trans* and Neurodivergent Perspectives on Listening in the Field",
        details: ["2022 Audition Series"],
        previewImage: "../images/attention-attunement-images/002-attention-attunement-amias-hanley.jpg"
      },
      {
        title: "On Ambiences, Decolonising Catastrophes and the Timbre of Bodies",
        details: ["2019 Eco_Media Symposium: Thinking and Making the Climate Catastrophe"],
        previewImage: "../images/on-ambiences-images/001-on-ambiences-amias-hanley.jpg"
      }
    ],
  },
  {
    title: "PEDAGOGY",
    submenu: [
      {
        title: "Maker of Sound",
        details: ["Master of Fine Art, The Margate School, UK"],
        previewType: "text",
        previewText: {
          course: "Maker of Sound",
          institution: "The Margate School, UK",
          year: "26 November 2024 - 28 January 2025",
          role: "Tutor"
        }
      },
      {
        title: "Making Media",
        details: [
          "Bachelor of Design, Singapore Institute of Management, SG",
          "Bachelor of Professional Communication, RMIT University, AU",
        ],
        previewType: "text",
        previewText: [
          {
            course: "Making Media",
            institution: "Singapore Institute of Management, SG\n(RMIT offshore campus)" , 
            year: "2023-2024",
            role: "Visiting Tutor"
          },
          {
            course: "Making Media",
            institution: "RMIT University, AU",
            year: "2020-2022",
            role: "Tutor"
          }
        ]
      },
      {
        title: "Soundscape Studies",
        details: ["Master of Design Innovation and Technology, RMIT University, AU"],
        previewType: "text",
        previewText: {
          course: "Soundscape Studies",
          institution: "RMIT University, AU",
          year: "2021-2022",
          role: "Studio Leader"
        }
      },
      {
        title: "Sound Futures: Eco-techno approaches to sound and listening",
        details: ["Bachelor of Communication (Media), RMIT University, AU"],
        previewType: "text",
        previewText: {
          course: "Sound Futures: Eco-techno approaches to sound and listening",
          institution: "RMIT University, AU",
          year: "2020-2021",
          role: "Studio Leader"
        }
      },
      {
        title: "Speculative Sound Design: Sonic imaginings & worlding with sound",
        details: ["Bachelor of Communication (Media), RMIT University, AU"],
        previewType: "text",
        previewText: {
          course: "Speculative Sound Design: Sonic imaginings & worlding with sound",
          institution: "RMIT University, AU",
          year: "2019-2020",
          role: "Studio Leader"
        }
      },
      {
        title: "To Be at Sea: Making site-responsive media in uncertain times",
        details: ["Bachelor of Communication (Media), RMIT University, AU"],
        previewType: "text",
        previewText: {
          course: "To Be at Sea: Making site-responsive media in uncertain times",
          institution: "RMIT University, AU",
          year: "2018-2019",
          role: "Studio Leader"
        }
      },
      {
        title: "Media 1",
        details: ["Bachelor of Communication (Media), RMIT University, AU"],
        previewType: "text",
        previewText: {
          course: "Media 1",
          institution: "RMIT University, AU",
          year: "2017-2018",
          role: "Tutor"
        }
      },
      {
        title: "Story and Place in Media",
        details: ["Bachelor of Communication (Media), RMIT University, AU"],
        previewType: "text",
        previewText: {
          course: "Story and Place in Media",
          institution: "RMIT University, AU",
          year: "2016-2017",
          role: "Tutor"
        }
      }
    ],
  },
  /* commented out about page 
  {
    title: "ABOUT",
    url: "about/about.html",
    submenu: []
  }
  */
];


// ====== Generate the Menu Dynamically ======
function generateMenu(menuData) {
  menuData.forEach((menuItem) => {
    const menuItemElement = document.createElement("li");
    menuItemElement.className = "menu-item";

    // Handle direct links (no submenu)
    if (menuItem.url) {
      // Create a direct link instead of a button
      const menuLink = document.createElement("a");
      menuLink.className = "menu-btn";
      menuLink.textContent = menuItem.title;
      
      // Determine current location for path handling
      const currentPath = window.location.pathname;
      const isInRoot = !currentPath.includes('/projects/') && 
                       !currentPath.includes('/public-lectures/') && 
                       !currentPath.includes('/publications/') && 
                       !currentPath.includes('/pedagogy/') &&
                       !currentPath.includes('/about/');
      
      // Set the href based on location
      menuLink.href = isInRoot ? menuItem.url : `../${menuItem.url}`;
      
      // Style the link
      menuLink.style.display = "block";
      menuLink.style.textDecoration = "none";
      menuLink.style.color = "inherit";
      
      // Add to menu and continue to next item
      menuItemElement.appendChild(menuLink);
      menuContainer.appendChild(menuItemElement);
      return;
    }

    // Handle dropdown menus (with submenu)
    // Create menu button
    const menuButton = document.createElement("button");
    menuButton.className = "menu-btn menu-toggle";
    menuButton.textContent = menuItem.title;

    // Create submenu container
    const submenu = document.createElement("ul");
    submenu.className = "submenu";

    // Determine the folder name based on menu item title
    const folderName = menuItem.title
      .toLowerCase()
      .replace(/\s+/g, '-');

    // Add accessible relationships
    const submenuId = `submenu-${folderName}`;
    submenu.id = submenuId;
    menuButton.setAttribute("aria-controls", submenuId);
    menuButton.setAttribute("aria-expanded", "false");

    // Populate submenu items
    menuItem.submenu.forEach((submenuItem) => {
      const submenuElement = document.createElement("li");
      submenuElement.className = "submenu-item";
      submenuElement.tabIndex = 0; // <-- add this so the whole row can receive keyboard focus
      
      // Set preview data based on type
      if (submenuItem.previewType === "text" && submenuItem.previewText) {
        submenuElement.setAttribute("data-preview-type", "text");
        submenuElement.setAttribute("data-preview-text", JSON.stringify(submenuItem.previewText));
      } else if (submenuItem.previewImage) {
        submenuElement.setAttribute("data-preview-type", "image");
        submenuElement.setAttribute("data-preview-image", submenuItem.previewImage);
      }

      // Create a hyperlink for the submenu title
      const submenuLink = document.createElement("a");

      // Get the current location to adjust the relative path
      const currentPath = window.location.pathname;
      
      // Determine if we're in a specific section folder
      const isInSection = currentPath.includes(`/${folderName}/`);
      const isInRoot = !currentPath.includes('/projects/') && 
                       !currentPath.includes('/public-lectures/') && 
                       !currentPath.includes('/publications/') && 
                       !currentPath.includes('/pedagogy/') &&
                       !currentPath.includes('/about/');

      // Generate filename from the submenu title
      const filename = submenuItem.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$|:|\*|\(|\)/g, "") + ".html";

      // Construct the URL based on current location and section type
      let submenuUrl;
      if (isInSection) {
        submenuUrl = filename;
      } else if (isInRoot) {
        submenuUrl = `${folderName}/${filename}`;
      } else {
        submenuUrl = `../${folderName}/${filename}`;
      }

      submenuLink.href = submenuUrl;
      submenuLink.textContent = submenuItem.title;

      // Prevent reload if already on this page
      submenuLink.addEventListener("click", function (e) {
        const currentUrl = window.location.pathname;
        if (currentUrl.endsWith(filename)) {
          e.preventDefault();
        }
      });

      submenuElement.appendChild(submenuLink);

      // Add nested details if available
      if (submenuItem.details) {
        const nestedList = document.createElement("ul");
        nestedList.className = "nested-list";

        submenuItem.details.forEach((detail) => {
          const nestedItem = document.createElement("li");
          nestedItem.className = "nested-item";
          nestedItem.textContent = detail;
          nestedList.appendChild(nestedItem);
        });

        submenuElement.appendChild(nestedList);
      }

      submenu.appendChild(submenuElement);
    });

    // Add button and submenu to menu item
    menuItemElement.appendChild(menuButton);
    menuItemElement.appendChild(submenu);
    
    // Add menu item to container
    menuContainer.appendChild(menuItemElement);
  });
}

// Dynamic image path handling based on current location
function getImagePath(originalPath) {
  const currentPath = window.location.pathname;
  const isInRoot = !currentPath.includes('/projects/') && 
                   !currentPath.includes('/public-lectures/') && 
                   !currentPath.includes('/publications/') && 
                   !currentPath.includes('/pedagogy/') &&
                   !currentPath.includes('/about/');
  
  if (isInRoot) {
    // On index page, remove the ../ prefix
    return originalPath.replace('../', '');
  } else {
    // On individual pages, keep the ../ prefix
    return originalPath;
  }
}

// ====== Build menu ======
generateMenu(menuData);

// Hide About only when hovering actual submenu links (not top-level buttons or whitespace)
menuContainer.addEventListener('mouseover', (e) => {
  // Only on the home page, and only until we've already hidden it
  if (!isHomePage() || aboutDismissed) return;

  // Only trigger when the pointer is over a submenu link (the actual item titles)
  const trigger = e.target.closest('.submenu-item a');
  if (!trigger) return;

  hideAboutSection();
});

// Ensure preview host gets correct layout mode on page load
document.addEventListener('DOMContentLoaded', () => {
  ensurePreviewHost();
});

// Make site title link behave correctly (local vs deployed)
document.addEventListener('DOMContentLoaded', () => {
  const homeLink = document.querySelector('header h1 a, .site-title');
  if (!homeLink) return;

  const isFile = location.protocol === 'file:';
  if (isFile) {
    // Local dev (file:// ... ) → use relative links
    const p = location.pathname.toLowerCase();
    const inSection = /(\/projects\/|\/public-lectures\/|\/publications\/|\/pedagogy\/|\/about\/)/.test(p);
    homeLink.setAttribute('href', inSection ? '../index.html' : 'index.html');
  } else {
    // Production (https://amiashanley.com) → absolute root works perfectly
    homeLink.setAttribute('href', '/');
  }

  homeLink.setAttribute('rel', 'home');
  if (!homeLink.getAttribute('aria-label')) homeLink.setAttribute('aria-label', 'Home');
});

// ====== Toggle Submenu Visibility (click-to-expand) ======
menuContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("menu-btn")) {
    const submenu = e.target.nextElementSibling;
    if (!submenu || !submenu.classList.contains('submenu')) return;

    const isOpen = submenu.style.display === "block";

    // Toggle visibility
    submenu.style.display = isOpen ? "none" : "block";

    // Toggle ARIA
    e.target.setAttribute("aria-expanded", isOpen ? "false" : "true");

    // Toggle the open state class on the parent <li>
    const parentLi = e.target.closest(".menu-item");
    if (parentLi) {
      parentLi.classList.toggle("is-open", !isOpen);
    }
  }
});


// ====== Active state: keep submenu open on destination page ======
function applyActiveMenuState() {
  const normalise = (p) => p.replace(/\/index\.html?$/i, '/').toLowerCase();
  const here = normalise(location.pathname);

  const links = menuContainer.querySelectorAll('a[href]');
  let bestMatch = null;
  let bestLen = -1;

  links.forEach(a => {
    const href = a.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('javascript:')) return;

    let path;
    try {
      path = new URL(href, location.origin).pathname;
    } catch (_) { return; }

    path = normalise(path);

    // Exact match or suffix match for relative structures
    if (here === path || here.endsWith(path)) {
      if (path.length > bestLen) {
        bestMatch = a;
        bestLen = path.length;
      }
    }
  });

  if (!bestMatch) return;

  // Mark the active link
  bestMatch.classList.add('is-active');
  const li = bestMatch.closest('li');
  if (li) li.classList.add('is-active');

  // If this is inside a submenu, open it and reflect ARIA
  const submenu = bestMatch.closest('.submenu');
  if (submenu) {
    submenu.style.display = "block";
    const parentLi = submenu.closest('li');
    if (parentLi) parentLi.classList.add('is-open');
    const toggle = parentLi ? parentLi.querySelector('.menu-toggle[aria-controls]') : null;
    if (toggle) toggle.setAttribute('aria-expanded', 'true');
  }
}

applyActiveMenuState();

// Expand clickable area: clicking anywhere inside .submenu-item follows its link
menuContainer.addEventListener('click', (e) => {
  // If a real link was clicked, let it do its thing
  if (e.target.closest('.submenu-item a')) return;

  const item = e.target.closest('.submenu-item');
  if (!item) return;

  const link = item.querySelector('a[href]');
  if (!link) return;

  // Avoid hijacking clicks on elements that should be interactive later
  const interactive = e.target.closest('button, [role="button"], input, select, textarea');
  if (interactive) return;

  // Follow the link
  window.location.href = link.href;
});

// Keyboard support: Enter/Space on the submenu item follows its link
menuContainer.addEventListener('keydown', (e) => {
  const item = e.target.closest('.submenu-item');
  if (!item) return;

  // Only react if the submenu-item itself has focus
  if (document.activeElement !== item) return;

  const isEnter = e.key === 'Enter';
  const isSpace = e.key === ' ' || e.key === 'Spacebar';

  if (!isEnter && !isSpace) return;

  const link = item.querySelector('a[href]');
  if (!link) return;

  e.preventDefault(); // prevent page scroll on Space
  link.click();
});


// ====== Preview logic (unchanged) ======
let previewTimeout;
const PREVIEW_DELAY = 25; // Small delay to prevent flickering

menuContainer.addEventListener("mouseover", (e) => {

  // Only run hover previews on the home page
  if (!isHomePage()) return;

  clearTimeout(previewTimeout);

  previewTimeout = setTimeout(() => {
    const item = e.target.closest(".submenu-item, .nested-item");
    if (!item) return;

    const parentItem = item.closest(".submenu-item");
    if (!parentItem) return;

    // NEW: Do NOT show preview on the active submenu item
    if (isActiveSubmenuItem(parentItem)) {
      const host = ensurePreviewHost();
      host.innerHTML = '';
      host.style.display = 'none';
      return;
    }

    displayPreview(parentItem);
  }, PREVIEW_DELAY);
});


function isActiveSubmenuItem(el) {
  if (!el) return false;
  return el.classList.contains('is-active') || !!el.querySelector('a.is-active');
}

// Separate function for cleaner preview display logic
function displayPreview(parentItem) {
  const previewHost = ensurePreviewHost(); // make sure it exists

  const previewType = parentItem.dataset.previewType;

  // Clear existing content
  previewHost.innerHTML = '';

  // Position and reveal the host
  positionPreview(parentItem);   // your existing centring logic
  previewHost.style.display = 'block';

  if (previewType === "image") {
    displayImagePreview(parentItem);
  } else if (previewType === "text") {
    displayTextPreview(parentItem);
  } else {
    displayImagePreview(parentItem); // fallback
  }
}


// Position preview (home: align to content column; inner: use CSS classes)
function positionPreview(item) {
  const host = ensurePreviewHost();

  // --- vertical position (centre in viewport under header) ---
  const viewportHeight = window.innerHeight;
  const headerHeight = 120; // your header height
  const previewHeight = 400;
  const centredTop = headerHeight + ((viewportHeight - headerHeight) / 2) - (previewHeight / 2);
  host.style.top = `${Math.max(0, Math.round(centredTop))}px`;

  // --- horizontal / size logic ---
  if (isHomePage()) {
    // Line up to the right edge of the sidebar so it doesn’t bump the menu
    const sidebar = document.querySelector('.sidebar');
    const gutter = 20; // space between sidebar and preview
    const sidebarRight = sidebar
      ? Math.round(sidebar.getBoundingClientRect().right)
      : Math.round(window.innerWidth * 0.30); // fallback to 30% if sidebar not found

    // Available width to the right of the sidebar
    const available = Math.max(0, window.innerWidth - sidebarRight - gutter * 2);

    // Target width on home (adjust to taste)
    const targetWidth = Math.min(900, available);

    // Force home mode and inline overrides to align with content column
    host.classList.add('preview--home');
    host.classList.remove('preview--inner');
    host.style.left = `${sidebarRight + gutter}px`;
    host.style.right = 'auto';
    host.style.transform = 'none';
    host.style.width = `${targetWidth}px`;
  } else {
    // Inner pages: rely on CSS docking (right) and clear any home overrides
    host.classList.add('preview--inner');
    host.classList.remove('preview--home');
    host.style.left = '';
    host.style.right = '';
    host.style.transform = '';
    host.style.width = '';
  }
}

function displayImagePreview(parentItem) {
  const previewHost = ensurePreviewHost();

  const previewImage = parentItem.dataset.previewImage;
  if (!previewImage) {
    showFallbackMessage("No preview available");
    return;
  }

  const img = document.createElement("img");
  img.src = getImagePath(previewImage);
  img.alt = "Preview";
  img.className = "preview-image";

  // Fit safely
  img.style.maxWidth = '100%';
  img.style.height = 'auto';

  // Loading state
  img.style.opacity = '0';
  img.onload = function () { img.style.opacity = '1'; };
  img.onerror = function () { showFallbackMessage("Image not available"); };

  previewHost.appendChild(img);
}


function displayTextPreview(parentItem) {
  const previewHost = ensurePreviewHost();

  const previewTextData = parentItem.dataset.previewText;
  if (!previewTextData) {
    showFallbackMessage("No preview available");
    return;
  }

  try {
    const textData = JSON.parse(previewTextData);
    const dataArray = Array.isArray(textData) ? textData : [textData];

    const textPreviewContainer = document.createElement("div");
    textPreviewContainer.className = "preview-text-container";

    dataArray.forEach((data, index) => {
      const textPreview = createTextPreviewElement(data, index);
      textPreviewContainer.appendChild(textPreview);
    });

    previewHost.appendChild(textPreviewContainer);
  } catch (e) {
    console.error('Error parsing preview text data:', e);
    showFallbackMessage("Preview not available");
  }
}

function createTextPreviewElement(data, index) {
  const textPreview = document.createElement("div");
  textPreview.className = "preview-text";
  
  if (index > 0) {
    textPreview.classList.add("preview-text-subsequent");
  }
  
  // Create elements with error checking
  const elements = [
    { className: "preview-course-title", content: data.course },
    { className: "preview-institution", content: data.institution },
    { className: "preview-year", content: data.year },
    { className: "preview-role", content: data.role }
  ];
  
  elements.forEach(({ className, content }) => {
    if (content) {
      const element = document.createElement("div");
      element.className = className;
      element.textContent = content;
      textPreview.appendChild(element);
    }
  });
  
  return textPreview;
}

function showFallbackMessage(message) {
  const previewHost = ensurePreviewHost();

  const fallback = document.createElement("div");
  fallback.className = "preview-fallback";
  fallback.textContent = message;
  fallback.style.cssText = `
    padding: 40px 20px;
    color: #999;
    font-style: italic;
    text-align: center;
    margin-top: 100px;
  `;
  previewHost.appendChild(fallback);
}

// Improved mouse leave with debouncing
let leaveTimeout;
menuContainer.addEventListener("mouseleave", () => {
  clearTimeout(previewTimeout);

  leaveTimeout = setTimeout(() => {
    const host = ensurePreviewHost();
    host.innerHTML = '';
    host.style.display = 'none'; // hide when not in use
  }, 50); // small delay to prevent flicker when moving between items
});

// Cancel leave timeout if mouse re-enters quickly
menuContainer.addEventListener("mouseenter", () => {
  clearTimeout(leaveTimeout);
});

// ====== Mobile-only: gently scroll past menu to content ======
document.addEventListener('DOMContentLoaded', () => {

  // Only apply on small screens
  if (window.innerWidth > 768) return;

  // Identify the first meaningful content block
  const target =
    document.querySelector('.project-container, .home-about, .content-area');

  if (!target) return;

  // Allow layout to settle, then scroll
  setTimeout(() => {
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }, 150);

});

