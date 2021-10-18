/* eslint-disable no-useless-constructor */
import { BaseService } from "./BaseService";


class TicketService extends BaseService {
    BASE_ENDPOINT = 'QuanLyDatVe';

    constructor() {
        super();
    }

    bookingTicket = (booking) => {
        const url = `${this.BASE_ENDPOINT}/DatVe`;
        return this.post(url, booking);
    }

    addShowtime = (showtime) => {
        const url = `${this.BASE_ENDPOINT}/TaoLichChieu`;
        return this.post(url, showtime);
    }
}

export const ticketService = new TicketService();