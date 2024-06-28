document.addEventListener('DOMContentLoaded', () => {
    const dailyAttendanceCard = document.getElementById('daily-attendance-card');
    const missedAttendanceCard = document.getElementById('missed-attendance-card');
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalContent = document.getElementById('modal-content');
    const closeModalButton = document.getElementById('close-modal');

    const staffData = [
        { id: 1, name: 'John Doe', attendance: [1, 1, 1, 0, 1], missed: 1 },
        { id: 2, name: 'Jane Smith', attendance: [1, 1, 1, 1, 1], missed: 0 },
        { id: 3, name: 'Alice Johnson', attendance: [0, 1, 1, 0, 0], missed: 3 },
        // Add more staff as needed
    ];

    function openModal(title, content) {
        modalTitle.textContent = title;
        modalContent.innerHTML = content;
        modal.classList.remove('hidden');
    }

    dailyAttendanceCard.addEventListener('click', () => {
        const dailyAttendanceContent = staffData.map(staff => `
            <div class="mb-2">
                <p><strong>${staff.name}</strong>: ${staff.attendance.join(', ')}</p>
            </div>
        `).join('');
        openModal('Daily Attendance', dailyAttendanceContent);
    });

    missedAttendanceCard.addEventListener('click', () => {
        const missedAttendanceContent = staffData.filter(staff => staff.missed > 0).map(staff => `
            <div class="mb-2">
                <p><strong>${staff.name}</strong>: Missed ${staff.missed} days</p>
            </div>
        `).join('');
        openModal('Missed Attendance', missedAttendanceContent);
    });

    closeModalButton.addEventListener('click', () => {
        modal.classList.add('hidden');
    });

    // Example: Set attendance numbers
    document.getElementById('daily-attendance').textContent = staffData.reduce((sum, staff) => sum + staff.attendance.filter(day => day === 1).length, 0);
    document.getElementById('missed-attendance').textContent = staffData.reduce((sum, staff) => sum + staff.missed, 0);
});
