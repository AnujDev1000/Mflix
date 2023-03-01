
export default function classChangeUtil2(param, category) {
    document.getElementById(category).classList.remove("btn-warning");
    document.getElementById(category).classList.add("btn-outline-warning");
    document.getElementById(param).classList.remove("btn-outline-warning");
    document.getElementById(param).classList.add("btn-warning");
}
