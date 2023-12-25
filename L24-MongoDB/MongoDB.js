teachers = [
    {
        name: 'Abhishek',
        subject: 'C++'
    },
    {
        name: 'Monu',
        subject: 'Java'
    },
    {
        name: 'Samarth',
        subject: 'Web'
    },
    {
        name: 'Abhijeet',
        subject: 'Data Science'
    }
];

db.Teachers.insertMany([
    { name: 'Monu', subject: 'Java' }, 
    { name: 'Samarth', subject: 'Web' }, 
    { name: 'Abhijeet', subject: 'Data Science' }
])