
export default function getDateUtil(type=0) {
    const date = new Date().toJSON().slice(0, 10);
    if(type === 0){
        return date
    }
    return (parseInt(date.slice(0,4)) + 1) + date.slice(4,10)
}
