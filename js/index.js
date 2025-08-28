// get inner text funtinon
function getInnerTextId(id) {
  const element = document.getElementById(id).innerText;
  return element;
}

document
  .getElementById("card-container")
  .addEventListener("click", function (e) {
    if (e.target.className.includes("heart-btn")) {
      const heartNumber = getInnerTextId("heart-number");
      const newHeatNumber = Number(heartNumber) + 1;
      document.getElementById("heart-number").innerText = newHeatNumber;
    }

    if (e.target.className.includes("copy-btn")) {
      const copyBtn = e.target;
      const copyNumber = copyBtn.parentNode.parentNode.children[2].innerText;
          navigator.clipboard.writeText(copyNumber).then(() => {
            alert(`নম্বর কপি হয়েছে: ${copyNumber}`);
      });
      const copyCount = getInnerTextId("copy-count");
      const currentCopyCount = Number(copyCount) + 1;
      document.getElementById("copy-count").innerText = currentCopyCount;
    }

    if (e.target.className.includes("call-btn")) {
      const callBtn = e.target;
      const serviceNameEng =
        callBtn.parentNode.parentNode.children[1].children[1].innerText;
      const callNumber = callBtn.parentNode.parentNode.children[2].children[0].innerText;
      const coins = getInnerTextId("conis");
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
    <div class="flex justify-between p-2 items-center sm:p-4 mt-3 bg-gray-100 rounded-md">
    <div>
    <p class=" sm:text-lg text-[10px]">${serviceNameBng}</p>
    <p class="sm:text-lg text-[10px]">${callNumber}</p>
    </div>
  <span class="sm:text-sm text-[8px]">${localTimeString}</span>
  
</div>
    `;
      historyContainer.appendChild(newHistory);
    }
  });

const clearBtn = document
  .getElementById("clear-btn")
  .addEventListener("click", function () {
    const historyContainer = document.getElementById("history-container");
    historyContainer.innerHTML = "";
  });
