document
  .getElementById("card-container")
  .addEventListener("click", function (e) {
    if (e.target.className.includes("heart-btn")) {
      const heartNumber = document.getElementById("heart-number").innerText;
      const newHeatNumber = Number(heartNumber) + 1;
      document.getElementById("heart-number").innerText = newHeatNumber;
    }

    if (e.target.className.includes("copy-btn")) {
      const copyBtn = e.target;
      const copyNumber = copyBtn.parentNode.parentNode.children[2].innerText;

      
        navigator.clipboard.writeText(copyNumber).then(() => {
          alert("Text copied: " + copyNumber);
    });
      
        const copyCount = document.getElementById("copy-count").innerText;
         const currentCopyCount = Number(copyCount) + 1;
         document.getElementById("copy-count").innerText = currentCopyCount;
      
    };


   