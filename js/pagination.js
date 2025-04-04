// 分页功能实现
document.addEventListener('DOMContentLoaded', function() {
    // 获取所有成员卡片和分页按钮
    const memberCards = document.querySelectorAll('.member-card');
    const pageButtons = document.querySelectorAll('.page-btn');
    
    // 默认显示第一页
    showPage(1);
    
    // 为所有分页按钮添加点击事件
    pageButtons.forEach(button => {
        button.addEventListener('click', function() {
            const pageNum = parseInt(this.getAttribute('data-page'));
            showPage(pageNum);
        });
    });
    
    // 显示指定页面的函数
    function showPage(pageNum) {
        // 隐藏所有成员卡片
        memberCards.forEach(card => {
            card.style.display = 'none';
        });
        
        // 显示当前页的成员卡片
        const currentPageCards = document.querySelectorAll(`.member-card[data-page="${pageNum}"]`);
        currentPageCards.forEach(card => {
            card.style.display = 'block';
        });
        
        // 更新分页按钮的激活状态
        pageButtons.forEach(button => {
            if (parseInt(button.getAttribute('data-page')) === pageNum) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    }
});