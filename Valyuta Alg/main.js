const apiKey = "FZSRtaTpqQl54rMFau1Dg7o9rBgAgDnF";
const apiUrl1 = "https://api.currencybeacon.com/v1/convert";
let inp1 = document.querySelector(".inp1");
let inp2 = document.querySelector(".inp2");
let oneTo = document.querySelector("span.one-to");
let toValuta = document.querySelector("span.to-valuta");
let oneFrom = document.querySelector("span.one-from");
let oneTo2 = document.querySelector("span.one-to2");
let toValuta2 = document.querySelector("span.to-valuta2");
let oneFrom2 = document.querySelector("span.one-from2");
let b = document.querySelector("button.active");
let baseCurrency = "RUB";
let targetCurrency = "USD";
let warning=document.querySelector('.info')
let buttons = document.querySelectorAll(".btn-all-1 button");
let buttons2 = document.querySelectorAll(".btn-all-2 button");
let w=document.querySelector('.val-setting')

let default1 = `${apiUrl1}?api_key=${apiKey}&from=USD&to=RUB&amount=${1}`;

fetch(`${default1}`)
  .then((response) => response.json())
  .then((defdata) => {
    oneFrom.innerHTML = targetCurrency;
    oneTo.innerHTML = defdata.value.toFixed(4);
    toValuta.innerHTML = baseCurrency;

  })
  .catch((error) => {
    console.error('Error'+ error)

  });
  const apiUrlnewestd = `${apiUrl1}?api_key=${apiKey}&from=RUB&to=USD&amount=${1}`;

    fetch(`${apiUrlnewestd}`)
      .then((response) => response.json())
      .then((dat) => {
        oneFrom2.innerHTML = baseCurrency;
        oneTo2.innerHTML = dat.value.toFixed(4);
        toValuta2.innerHTML = targetCurrency;
        warning.classList.add('d-none')


      })
      .catch((error) => {
        warning.classList.remove('d-none')

      });

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => {
      btn.classList.remove("active");
    });

    button.classList.add("active");
    baseCurrency = button.innerHTML.trim();
    
    inp1.value = '';
    let hasLetter1 = /[a-zA-Z]/.test(inp2.value.replace(/[^0-9.]/g, ''));
 
    if(inp2.value<0 || hasLetter1){
      inp1.value=0
  
    }
    else{
      let apiUrlForStatic = `${apiUrl1}?api_key=${apiKey}&from=${targetCurrency}&to=${baseCurrency}&amount=${inp2.value}`;

      fetch(`${apiUrlForStatic}`)
        .then((response) => response.json())
        .then((datax) => {
         inp1.value = datax.value.toFixed(4);
  
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      const apiUrl = `${apiUrl1}?api_key=${apiKey}&from=${baseCurrency}&to=${targetCurrency}&amount=${1}`;
  
      fetch(`${apiUrl}`)
        .then((response) => response.json())
        .then((datax) => {
          oneFrom2.innerHTML = baseCurrency;
          oneTo2.innerHTML = datax.value.toFixed(4);
          toValuta2.innerHTML = targetCurrency;
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      const apiUrl2 = `${apiUrl1}?api_key=${apiKey}&from=${targetCurrency}&to=${baseCurrency}&amount=${1}`;
  
      fetch(`${apiUrl2}`)
        .then((response) => response.json())
        .then((data1) => {
          oneFrom.innerHTML = targetCurrency;
          oneTo.innerHTML = data1.value.toFixed(4);
          toValuta.innerHTML = baseCurrency;
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }

  });
});

buttons2.forEach((button) => {
  button.addEventListener("click", () => {
    buttons2.forEach((btn) => {
      btn.classList.remove("active2");
    });

    button.classList.add("active2");
    targetCurrency = button.innerHTML.trim();
    let hasLetter = /[a-zA-Z]/.test(inp1.value.replace(/[^0-9.]/g, ''));

    inp2.value = '';
    if(inp1.value<0 || hasLetter){
      inp2.value=0
    }
    else{
      let apiUrlForStatic = `${apiUrl1}?api_key=${apiKey}&from=${baseCurrency}&to=${targetCurrency}&amount=${inp1.value}`;

      fetch(`${apiUrlForStatic}`)
        .then((response) => response.json())
        .then((datax) => {
         inp2.value = datax.value.toFixed(4);
        
        })
        .catch((error) => {
          console.error("Error:", error);
        });
  
      const apiUrl = `${apiUrl1}?api_key=${apiKey}&from=${baseCurrency}&to=${targetCurrency}&amount=${1}`;
  
      fetch(`${apiUrl}`)
        .then((response) => response.json())
        .then((datax) => {
          oneFrom2.innerHTML = baseCurrency;
          oneTo2.innerHTML = datax.value.toFixed(4);
          toValuta2.innerHTML = targetCurrency;
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      const apiUrl2 = `${apiUrl1}?api_key=${apiKey}&from=${targetCurrency}&to=${baseCurrency}&amount=${1}`;
  
      fetch(`${apiUrl2}`)
        .then((response) => response.json())
        .then((data1) => {
          oneFrom.innerHTML = targetCurrency;
          oneTo.innerHTML = data1.value.toFixed(4);
          toValuta.innerHTML = baseCurrency;
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }

  });
    
  });


  const onChange1 = async (e) => {

    let hasLetterforChange1 = /[a-zA-Z]/.test(inp1.value.replace(/[^0-9.]/g, ''));
  
    if (parseFloat(inp1.value) <= 0 || inp1.value.trim() === "" || inp1==0 ) {
      if(hasLetterforChange1 ){
inp1.value=0
inp2.value=0

      }
      else{
        inp2.value = 0;


        const apiUrlForZero2 = `${apiUrl1}?api_key=${apiKey}&from=${baseCurrency}&to=${targetCurrency}&amount=${1}`;
  
        fetch(`${apiUrlForZero2}`)
          .then((response) => response.json())
          .then((dataForZero2) => {
            oneFrom2.innerHTML = baseCurrency;
            oneTo2.innerHTML = dataForZero2.value.toFixed(4);
            toValuta2.innerHTML = targetCurrency;
        warning.classList.add('d-none')
  
          })
          .catch((error) => {
            warning.classList.remove('d-none')
  
          });
        const apiUrl8 = `${apiUrl1}?api_key=${apiKey}&from=${targetCurrency}&to=${baseCurrency}&amount=${1}`;
    
      }
     
    } else {
      let apiUrlinp2 = `${apiUrl1}?api_key=${apiKey}&from=${baseCurrency}&to=${targetCurrency}&amount=${e.target.value}`;
  
      await fetch(`${apiUrlinp2}`)
        .then((response) => response.json())
        .then((datai2) => {
          inp2.value = datai2.value.toFixed(4);
      warning.classList.add('d-none')
        
        })
        .catch((error) => {
       warning.innerHTML.remove('d-none')
        val-setting.classList.add('.d-none')

        });
    }
  };
const onChange2 = async (e) => {
  let hasLetterforChange2 = /[a-zA-Z]/.test(inp2.value.replace(/[^0-9.]/g, ''));

  if (parseFloat(inp2.value) <= 0 || inp2.value.trim() === "" ) {
    if(hasLetterforChange2 ){
      inp1.value=0

      inp2.value=0
      
            }else{
              inp1.value = 0;
              let apiUrlForZero2 = `${apiUrl1}?api_key=${apiKey}&from=${targetCurrency}&to=${baseCurrency}&amount=${1}`;
          
              fetch(`${apiUrlForZero2}`)
                .then((response) => response.json())
                .then((dataForZero2) => {
                  oneFrom.innerHTML = baseCurrency;
                  oneTo.innerHTML = dataForZero2.value.toFixed(4);
                  toValuta.innerHTML = targetCurrency;
                })
                .catch((error) => {
                  console.error("Error:", error);
                });
                let apiUrlForZero21 = `${apiUrl1}?api_key=${apiKey}&from=${baseCurrency}&to=${targetCurrency}&amount=${1}`;
          
              fetch(`${apiUrlForZero21}`)
                .then((response) => response.json())
                .then((dataForZero2) => {
                  oneFrom2.innerHTML = targetCurrency;
                  oneTo2.innerHTML = dataForZero2.value.toFixed(4);
                  toValuta2.innerHTML = baseCurrency;
                })
                .catch((error) => {
                  console.error("Error:", error);
                });
            }
  
  } else {
    let apiUrlInp2 = `${apiUrl1}?api_key=${apiKey}&from=${targetCurrency}&to=${baseCurrency}&amount=${e.target.value}`;

    await fetch(`${apiUrlInp2}`)
      .then((response) => response.json())
      .then((datai2) => {



        inp1.value = datai2.value.toFixed(4);
        let apiUrl21 = `${apiUrl1}?api_key=${apiKey}&from=${targetCurrency}&to=${baseCurrency}&amount=${1}`;

        fetch(`${apiUrl21}`)
          .then((response) => response.json())
          .then((datax2) => {
            oneFrom.innerHTML = baseCurrency;
            oneTo.innerHTML = datax2.value.toFixed(4);
            toValuta.innerHTML = targetCurrency;
          })
          .catch((error) => {
            console.error("Error:", error);
          });
          let apiUrlinp2 = `${apiUrl1}?api_key=${apiKey}&from=${baseCurrency}&to=${targetCurrency}&amount=${1}`;

        fetch(`${apiUrlinp2}`)
          .then((response) => response.json())
          .then((datainp22) => {
            oneFrom2.innerHTML = targetCurrency;
            oneTo2.innerHTML = datainp22.value.toFixed(4);
            toValuta2.innerHTML = baseCurrency;
    warning.classList.add('d-none')

          })
          .catch((error) => {
            console.error("Error:", error);
          });
      })
      .catch((error) => {
        warning.classList.remove('d-none')
        val-setting.classList.add('d-none')

      });
  }
};
