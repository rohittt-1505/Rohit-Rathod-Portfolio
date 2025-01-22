// Open the modal when a button is clicked
const buttons = document.querySelectorAll(".btnnn");
const modal = document.getElementById("modal");
const closeButton = document.querySelector(".close-btn");
const prevButton = document.querySelector(".prev-btn");
const nextButton = document.querySelector(".next-btn");
const courseImage = document.querySelector(".course-image");
const courseDescription = document.querySelector(".course-description");

let currentIndex = 0;
let currentCourseIndex = 0;

// Define the course details with images and description
const courses = [
    {
        name: "Way to Delhi",
        images: ["assets/images/travel/trip1/jim.jpg", "assets/images/travel/trip1/naini.jpg", "image1-3.jpg", "image1-4.jpg", "image1-5.jpg", "image1-6.jpg", "image1-7.jpg", "image1-8.jpg", "image1-9.jpg", "image1-10.jpg"],
        description: "Course about Way to Delhi"
    },
    {
        name: "Jim Corbett",
        images: ["image2-1.jpg", "image2-2.jpg", "image2-3.jpg", "image2-4.jpg", "image2-5.jpg", "image2-6.jpg", "image2-7.jpg", "image2-8.jpg", "image2-9.jpg", "image2-10.jpg"],
        description: "Course about Jim Corbett"
    },
    {
        name: "Garjiya Devi",
        images: ["image3-1.jpg", "image3-2.jpg", "image3-3.jpg", "image3-4.jpg", "image3-5.jpg", "image3-6.jpg", "image3-7.jpg", "image3-8.jpg", "image3-9.jpg", "image3-10.jpg"],
        description: "Course about Garjiya Devi"
    },
    {
        name: "Nainital Day 1",
        images: ["image4-1.jpg", "image4-2.jpg", "image4-3.jpg", "image4-4.jpg", "image4-5.jpg", "image4-6.jpg", "image4-7.jpg", "image4-8.jpg", "image4-9.jpg", "image4-10.jpg"],
        description: "Course about Nainital Day 1"
    },
    {
        name: "Nainital Day 2",
        images: ["image5-1.jpg", "image5-2.jpg", "image5-3.jpg", "image5-4.jpg", "image5-5.jpg", "image5-6.jpg", "image5-7.jpg", "image5-8.jpg", "image5-9.jpg", "image5-10.jpg"],
        description: "Course about Nainital Day 2"
    },
    {
        name: "Mussoorie",
        images: ["image6-1.jpg", "image6-2.jpg", "image6-3.jpg", "image6-4.jpg", "image6-5.jpg", "image6-6.jpg", "image6-7.jpg", "image6-8.jpg", "image6-9.jpg", "image6-10.jpg"],
        description: "Course about Mussoorie"
    },
    {
        name: "Rishikesh",
        images: ["image7-1.jpg", "image7-2.jpg", "image7-3.jpg", "image7-4.jpg", "image7-5.jpg", "image7-6.jpg", "image7-7.jpg", "image7-8.jpg", "image7-9.jpg", "image7-10.jpg"],
        description: "Course about Rishikesh"
    },
    {
        name: "Haridwar",
        images: ["image8-1.jpg", "image8-2.jpg", "image8-3.jpg", "image8-4.jpg", "image8-5.jpg", "image8-6.jpg", "image8-7.jpg", "image8-8.jpg", "image8-9.jpg", "image8-10.jpg"],
        description: "Course about Haridwar"
    },
];

// Open the modal and load the content when a button is clicked
buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        modal.style.display = "flex";
        currentCourseIndex = index;
        currentIndex = 0; // Reset image index when opening a new course
        updateCourseContent();
    });
});

// Close the modal
closeButton.addEventListener("click", () => {
    modal.style.display = "none";
});

// Update course content based on the currentIndex and currentCourseIndex
function updateCourseContent() {
    const course = courses[currentCourseIndex];
    courseImage.src = course.images[currentIndex];
    courseDescription.innerHTML = `<p>${course.description}</p>`;
}

// Show next image
nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % courses[currentCourseIndex].images.length;
    updateCourseContent();
});

// Show previous image
prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + courses[currentCourseIndex].images.length) % courses[currentCourseIndex].images.length;
    updateCourseContent();
});
