//Drop down button
document.querySelector('.dropdown').addEventListener('mouseover', () => {
    document.querySelector('.dropdown-content').style.display = 'block';
  });
  document.querySelector('.dropdown').addEventListener('mouseout', () => {
    document.querySelector('.dropdown-content').style.display = 'none';
  });