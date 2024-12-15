import "./styles.css";

const hRangeChange = (e) => {
    const value = e.target.value

    document.body.style.setProperty("--base-hue", value)
}

document.querySelector("#range-input").addEventListener("change", hRangeChange)