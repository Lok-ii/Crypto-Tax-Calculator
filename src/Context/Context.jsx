import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
} from "react";

const TaxContext = createContext({});

export const useTaxContext = () => {
  return useContext(TaxContext);
};

const Context = (props) => {
  // State for tax rate and selected country.
  const [countryCurrency, setCountryCurrency] = useState("$");
  const [shortTerm, setShortTerm] = useState(false);
  const [taxRate, setTaxRate] = useState("0%");
  const [purchasePrice, setPurchasePrice] = useState(0);
  const [salesPrice, setSalesPrice] = useState(0);
  const [expense, setExpenses] = useState(0);
  const [annualIncome, setAnnualIncome] = useState(0);
  const [capitalGains, setCapitalGain] = useState(0);
  const [discountForCapitalGains, setDiscount] = useState(0);
  const [netGains, setNetGans] = useState();
  const [tax, setTax] = useState();
  const [rates, setRates] = useState(0);

  const handleTaxRate = (value) => {
    setAnnualIncome(value);
    if (value === "0") {
      setTaxRate("0%");
    } else if (value === "19") {
      setTaxRate(`Nil + 19% of excess over ${countryCurrency}18,200`);
    } else if (value === "32.5") {
      setTaxRate(
        `${countryCurrency}5,092 + 32.5% of excess over ${countryCurrency}45,000`
      );
    } else if (value === "37") {
      setTaxRate(
        `${countryCurrency}29,467 + 37% of excess over ${countryCurrency}120,000`
      );
    } else if (value === "45") {
      setTaxRate(
        `${countryCurrency}51,667 + 45% of excess over ${countryCurrency}180,000`
      );
    }
  };

  useEffect(() => {
    let gains = salesPrice - purchasePrice - expense;
    setCapitalGain(gains);
    let discount;
    if (gains > 0) {
      discount = (gains * 50) / 100;
      setDiscount(discount);
    }
    if (!shortTerm) {
      let netGain = gains - discount;
      setNetGans(netGain);
    } else {
      setNetGans(gains);
    }

    let tax = (gains * parseFloat(annualIncome)) / 100;
    setTax(tax);
  }, [salesPrice, purchasePrice, expense, annualIncome, shortTerm]);

  function getPurchasePrice(e) {
    let value = e.target.value;
    if(value < 1){
        value = 0;
    }
    setPurchasePrice(value);
  }
  function getSalesPrice(e) {
    let value = e.target.value;
    if(value < 1){
        value = 0;
    }
    setSalesPrice(value);
  }
  function getExpenses(e) {
    let value = e.target.value;
    if(value < 1){
        value = 0;
    }
    setExpenses(value);
  }



  const valueObject = {
    countryCurrency,
    shortTerm,
    setCountryCurrency,
    setShortTerm,
    taxRate,
    handleTaxRate,
    purchasePrice,
    getPurchasePrice,
    salesPrice,
    getSalesPrice,
    expense,
    getExpenses,
    capitalGains,
    discountForCapitalGains,
    netGains,
    annualIncome,
    setAnnualIncome,
    rates,
    tax
  };

  return (
    <TaxContext.Provider value={valueObject}>
      {props.children}
    </TaxContext.Provider>
  );
};

export default Context;
