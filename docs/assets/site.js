(() => {
  const catalogInput = document.querySelector('#catalog-search');
  if (catalogInput) {
    const sections = [...document.querySelectorAll('[data-catalog-section]')];
    const count = document.querySelector('#catalog-count');
    const empty = document.querySelector('#catalog-empty');
    const applyCatalogSearch = () => {
      const query = catalogInput.value.trim().toLowerCase();
      let visibleSections = 0;
      let visibleRows = 0;
      sections.forEach((section) => {
        const rows = [...section.querySelectorAll('tbody tr')];
        if (!query) {
          rows.forEach((row) => { row.hidden = false; });
          section.hidden = false;
          visibleSections += 1;
          visibleRows += rows.length;
          return;
        }
        if (rows.length) {
          let matches = 0;
          rows.forEach((row) => {
            const match = row.textContent.toLowerCase().includes(query);
            row.hidden = !match;
            if (match) matches += 1;
          });
          section.hidden = matches === 0;
          if (matches) visibleSections += 1;
          visibleRows += matches;
          return;
        }
        const match = section.textContent.toLowerCase().includes(query);
        section.hidden = !match;
        if (match) visibleSections += 1;
      });
      count.textContent = query ? `匹配 ${visibleRows} 条，位于 ${visibleSections} 个分类` : `${visibleRows} 条资料，分布在 ${sections.length} 个分类`;
      empty.hidden = visibleSections !== 0;
    };
    catalogInput.addEventListener('input', applyCatalogSearch);
    applyCatalogSearch();
    return;
  }
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
