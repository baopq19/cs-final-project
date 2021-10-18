import { ticketService } from "../../services/TicketService";

export const bookingAction = (booking) => {
    return async (dispatch) => {
        try {
            const result = await ticketService.bookingTicket(booking);
            console.log('booking result', result);

        } catch (error) {
            console.log('ERROR', error);
        }
    }
}

export const addShowtimeAction = (showtime) => {
    return async (dispatch) => {
        try {
            const result = await ticketService.addShowtime(showtime);
            console.log('RS', result);
            if (result.status === 200) {
                return true;
            }

        } catch (error) {
            console.log('ERROR', error.response);
            return false;
        }
    }
}