(() => {
  const buttons = [...document.querySelectorAll('.filter')];
  const cards = [...document.querySelectorAll('.resource-card')];
  const input = document.querySelector('#resource-search');
  const empty = document.querySelector('#empty-state');
  let activeFilter = 'all';

  function applyFilters() {
    const query = input.value.trim().toLowerCase();
    let visible = 0;
    cards.forEach((card) => {
      const topicMatch = activeFilter === 'all' || card.dataset.topics.includes(activeFilter);
      const textMatch = !query || card.textContent.toLowerCase().includes(query);
      const show = topicMatch && textMatch;
      card.hidden = !show;
      if (show) visible += 1;
    });
    empty.hidden = visible !== 0;
  }

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      activeFilter = button.dataset.filter;
      buttons.forEach((item) => item.classList.toggle('active', item === button));
      applyFilters();
    });
  });
  input.addEventListener('input', applyFilters);
})();
