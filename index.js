async function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

module.exports = sleep;
module.exports.milliseconds = sleep;
module.exports.seconds = seconds => sleep(seconds * 1000);
module.exports.minutes = minutes => sleep(minutes * 1000 * 60);
module.exports.hours = hours => sleep(hours * 1000 * 60 * 60);
module.exports.days = days => sleep(days * 1000 * 60 * 60 * 24);