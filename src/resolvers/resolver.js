module.exports.resolvers = {
    Query: {
      userInfo: (_, args) => {
        const userInfo = {
            id: '1b2-xd2-dv3',
            name: "Bayard",
            currentBalanceProfile: {body: 0.6, mind: 0.4},
            actions: [
                {
                    name: 'Workout',
                    points: 3,
                    category: 'body',
                    timesSet: 0,
                    timesCompleted: 0,
                    completedTimeline: [],
                    createdDate: 2022-12-12,
                    deletedDate: null,
                    active: true
                },
            ],
            week : {
                pointsSet: 24,
                pointsComplete: 0,
                actionsComplete: [],
                startDate: '2023-03-06',
                endDate: '2023-03-13'
            },
            weekReports: [],
            day: {
                pointsSet: 4,
                pointsComplete: 0,
                actionsComplete: [],
                date: '2023-03-06'
            },
            dayReports: [],
            preferences: {
                intensitySchedule: { monday: 3, tuesday: 5, wednesday: 3, thursday: 5, friday: 2, saturday: 8, sunday: 5 }
            }
        }
  
        return userInfo;
      },
    },
  };