
export default function getTimeUtil(totalMinutes) {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    if(hours !== 0){
        return `${hours} hr ${minutes} min`
    }
    return `${minutes} min`
}
