import { ticketService } from "../../services/TicketService";

export const bookingAction = (booking) => {
    return async (dispatch) => {
        try {
            const result = await ticketService.bookingTicket(booking);
        } catch (error) {
            console.error('ERROR', error);
        }
    }
}

export const addShowtimeAction = (showtime) => {
    return async (dispatch) => {
        try {
            const result = await ticketService.addShowtime(showtime);
            if (result.status === 200) {
                return true;
            }

        } catch (error) {
            console.error('ERROR', error.response);
            return false;
        }
    }
}