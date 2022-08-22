const findMyIP = () => {
  const status = document.querySelector(".statuss");

  const ipAddress = `https://api.ipify.org/?format=json`;

  fetch(ipAddress)
    .then((res) => res.json())
    .then((data) => {
      status.textContent = data.ip;
    });
};

document.querySelector(".find-ip").addEventListener("click", findMyIP);