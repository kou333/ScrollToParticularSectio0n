import { useRef, useState } from "react";

export default function ScrollToSection() {
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current card index
  const refs = useRef([]); // Create an array of refs, one for each card

  const data = [
    {
      label: "First Card",
      style: {
        width: "100%",
        height: "600px",
        background: "red",
      },
    },
    {
      label: "Second Card",
      style: {
        width: "100%",
        height: "600px",
        background: "blue",
      },
    },
    {
      label: "Third Card",
      style: {
        width: "100%",
        height: "600px",
        background: "green",
      },
    },
    {
      label: "Fourth Card",
      style: {
        width: "100%",
        height: "600px",
        background: "orange",
      },
    },
    {
      label: "Fifth Card",
      style: {
        width: "100%",
        height: "600px",
        background: "purple",
      },
    },
  ];

  function handleScrollToNext() {
    if (currentIndex < data.length) {
      const nextCard = refs.current[currentIndex]; // Get the ref for the next card
      if (nextCard) {
        const pos = nextCard.getBoundingClientRect().top + window.scrollY; // Calculate position
        window.scrollTo({
          top: pos,
          behavior: "smooth",
        });
        setCurrentIndex(currentIndex + 1); // Move to the next card
      }
    }
  }

  return (
    <div>
      <h1>Scroll Through All Sections</h1>
      <button
        onClick={handleScrollToNext}
        disabled={currentIndex >= data.length} // Disable button after the last card
      >
        Scroll to Next
      </button>
      {data.map((dataItem, index) => (
        <div
          key={index}
          ref={(el) => (refs.current[index] = el)} // Assign refs dynamically
          style={dataItem.style}
        >
          <h3>{dataItem.label}</h3>
        </div>
      ))}
    </div>
  );
}
