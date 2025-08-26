document
  .getElementById("card-container")
  .addEventListener("click", function (e) {
    if (e.target.className.includes("heart-btn")) {
      const heartNumber = document.getElementById("heart-number").innerText;
      const newHeatNumber = Number(heartNumber) + 1;
      document.getElementById("heart-number").innerText = newHeatNumber;
    }

    // if (e.target.className.includes("copy-btn")) {
    //   const copyBtn = e.target;
    //   const copyNumber = copyBtn.parentNode.parentNode.children[2].innerText;

    //   console.log(copyNumber)
    //    navigator.clipboard.writeText(copyNumber).then(() => {
    //      //  alert("Text copied: " + callNumber);
    //      console.log(copyNumber);
    //    });
    // };

    // Check if the clicked element (or inside) is a button with copy-btn
    if (e.target.classList.contains("copy-btn")) {
      const copyBtn = e.target;

      // go up to the card
      const card = copyBtn.parentNode.parentNode;

      // find the specific text (example: 3rd child)
      const copyNumber = card.children[2].innerText;

      console.log("Text to copy:", copyNumber);

      navigator.clipboard.writeText(copyNumber).then(() => {
        console.log("Copied:", copyNumber);
        alert("Copied: " + copyNumber);
      });
    }

    if (e.target.className.includes("call-btn")) {
      const callBtn = e.target;
      const serviceNameEng =
        callBtn.parentNode.parentNode.children[1].children[1].innerText;
      const callNumber = callBtn.parentNode.parentNode.children[2].innerText;
      const coins = document.getElementById("conis").innerText;
      if (coins <= 0) {
        alert(`❌ আপনার পর্যাপ্ত কয়েন নেই। কল করতে কমপক্ষে ২০ কয়েন লাগবে।`);
        return;
      } else {
        alert(`📞 Calling ${serviceNameEng} ${callNumber}...`);
      }

      const currentCoin = Number(coins) - 20;
      document.getElementById("conis").innerText = currentCoin;

      const serviceNameBng =
        callBtn.parentNode.parentNode.children[1].children[0].innerText;

      const historyContainer = document.getElementById("history-container");

      const now = new Date();
      const localTimeString = now.toLocaleTimeString();

      const newHistory = document.createElement("div");
      newHistory.innerHTML = `
    <div class="flex p-5 justify-between text-[20px] mt-3 items-center bg-gray-100 rounded-md">
            <div>
              <p>${serviceNameBng}</p>
              <p>${callNumber}</p>
            </div>
            <p>${localTimeString}</p>
          </div>
    `;
      historyContainer.appendChild(newHistory);
    }
  });
