export function returnTime(msgChecked) {
    return `${msgChecked} ${new Date().toLocaleDateString("EN", { weekday: "long" })} (${new Date().toLocaleDateString()}) at ${new Date().toLocaleTimeString("EN", { hour: "numeric", minute: "numeric" })}`;
}