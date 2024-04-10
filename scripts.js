/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 * 
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your 
 *    browser and make sure you can see that change. 
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 * 
 */


const gpuData = [
    {
        name: "AMD Radeon RX 7900 XTX",
        imageURL: "https://m.media-amazon.com/images/I/71XirBhMcIL._AC_SL1500_.jpg",
        description: "Powered by AMD's newest chipset for the best quality gaming",
        specs: ["8GB GDDR6", "256-bit memory interface", "PCI Express 4.0"],
        hoverImageURL: "https://www.pcworld.com/wp-content/uploads/2023/04/AMD-RDNA-3-Radeon-RX-7900-XTX-4-1.jpg?quality=50&strip=all" 
    },
    {
        name: "Nvidia Geforce RTX 4090",
        imageURL: "https://store.nvidia.com/en-us/geforce/assets/ASUS%20ROG%20GeForce%20RTX%204090%20OC%20Edition%2024GB.png",
        description: "Bringing the next level of Geforce performance and capability",
        specs: ["24GB GDDR6X", "384-bit memory interface", "PCI Express 5.0"],
        hoverImageURL: "https://reviewed-com-res.cloudinary.com/image/fetch/s--zbj2C7k8--/b_white,c_limit,cs_srgb,f_auto,fl_progressive.strip_profile,g_center,h_668,q_auto,w_1187/https://reviewed-production.s3.amazonaws.com/1665511882932/4090hero.jpg"
    },
    {
        name: "Nvidia Geforce GTX 1660 Super",
        imageURL: "https://m.media-amazon.com/images/I/71Sx83O9HtL.jpg",
        description: "Reliable and guaranteed to bring a great gaming experience",
        specs: ["6GB GDDR6", "192-bit memory interface", "PCI Express 3.0"],
        hoverImageURL: "https://cdn.thefpsreview.com/wp-content/uploads/2019/10/in-page-logo-1.png"
    },
    {
        name: "MSI Geforce RTX 3090",
        imageURL: "https://m.media-amazon.com/images/I/61shiWYCJxL._AC_UF894,1000_QL80_.jpg",
        description: "Provides smooth gameplay and high processing power",
        specs: ["24GB GDDR6X", "384-bit memory interface", "PCI Express 4.0"],
        hoverImageURL: "https://i.ebayimg.com/images/g/gq8AAOSwLoJgivWS/s-l1600.jpg"
    }
    // Allows me to add as many GPUs as needed/liked
];

// Creates GPU cards
function createGPUCards() {
    const cardContainer = document.getElementById("card-container");

    gpuData.forEach(gpu => {
        const cardTemplate = document.querySelector(".card").cloneNode(true);
        cardTemplate.style.display = "block";
        
        const gpuTitle = cardTemplate.querySelector("h2");
        gpuTitle.textContent = gpu.name;

        const gpuImage = cardTemplate.querySelector("img");
        gpuImage.src = gpu.imageURL;
        gpuImage.alt = gpu.name + " image";

        const gpuDescription = cardTemplate.querySelector("p");
        gpuDescription.textContent = gpu.description;

        const descriptionList = cardTemplate.querySelector(".description-list");
        descriptionList.innerHTML = ""; 
        gpu.specs.forEach(spec => {
            const listItem = document.createElement("li"); // Bullet points my items
            listItem.textContent = spec;
            descriptionList.appendChild(listItem);
        });

        const bottomImage = cardTemplate.querySelector(".bottom-image");// The add to cart button
        bottomImage.src = "https://www.divikingdom.com/wp-content/uploads/2021/09/woocommerce-add-to-cart.jpg";

        // Hover effect over images
        gpuImage.addEventListener("mouseover", function() {
            gpuImage.src = gpu.hoverImageURL;
        });

        gpuImage.addEventListener("mouseout", function() {
            gpuImage.src = gpu.imageURL;
        });

        cardContainer.appendChild(cardTemplate);
    });
}
// Call the function to create GPU cards when the page loads
window.addEventListener("DOMContentLoaded", createGPUCards);

// Array of my PC items
const pcBuildItems = [
    "CPU - AMD Ryzen 5 3600X 3.8 GHz 6-Core Processor",
    "GPU - Gigabyte OC GeForce GTX 1660 Super",
    "RAM - Corsair Vengeance RGB Pro 16 GB (2 x 8 GB)",
    "Storage (SSD) - Western Digital Blue 500 GB M.2",
    'Storage (HDD) - Seagate Barracuda Compute 2 TB 3.5"',
    "Motherboard - MSI B450 TOMAHAWK MAX ATX AM4",
    "Power Supply - EVGA 600 BQ 600 W 80+",
    "Case - Thermaltake V200 RGB ATX Mid Tower",
    "Cooling (CPU Cooler/Fans) - Stock!"
];

// Function for Noah's PC Build button
function pcBuild() {
    let message = "Noah's PC Build Items:\n";
    pcBuildItems.forEach((item, index) => {
        message += (index + 1) + ". " + item + "\n";
    });
    
    alert(message);
}

// Event listener for the button click
document.getElementById("pcBuildButton").addEventListener("click", pcBuild);