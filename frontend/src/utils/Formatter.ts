import dayjs from "dayjs";

class Formatter {
    /**
     * @todo       format DateTime With Dayjs
     */
    THDateTime(dt: string) {
        const ytd = dayjs(dt).get('year');
        return `${dayjs(dt).format('DD')} ${dayjs(dt).format('MM')} ${ ytd + 543 }`;
    }

}