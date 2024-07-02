// create metadata for all the available functions to pass to completions API
const tools = [
  {
    type: 'function',
    function: {
      name: 'checkTimeSlots',
      say: 'All right, let me check the available time slots on calendar.',
      description: 'checks for available time slots on GCal.',
      parameters: {
        type: 'object',
        properties: {
          timeOfDay: {
            type: 'string',
            'enum': ['morning', 'evening'],
            description: 'time of day either morning or evening',
          },
        },
        required: [],
      },
      returns: {
        type: 'object',
        properties: {
          timeSlots: {
            type: 'string',
            description: 'the available time slots'
          }
        }
      }
    },
  },
  {
    type: 'function',
    function: {
      name: 'bookAppointment',
      say: 'All right, let me book it for you.',
      description: 'book appointment at selected time on calendar, by creating event',
      parameters: {
        type: 'object',
        properties: {
          time: {
            type: 'string',
            description: 'selected time from available time slots',
          },
          name: {
            type: 'string',
            description: 'name of client or user who is trying to book the appointment',
          }
        },
        required: ['time', 'name'],
      },
      returns: {
        type: 'object',
        properties: {
          timeSlots: {
            type: 'string',
            description: 'booking confirmation'
          }
        }
      }
    },
  },
];

module.exports = tools;