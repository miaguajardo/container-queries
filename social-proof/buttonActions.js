const driverSizes = {
    'Desktop': [
      {
        driverWidth: 550,
        label: 'Small'
      },
      {
        driverWidth: 750,
        label: 'Medium'
      }
    ],
    'Tablet': [
      {
        driverWidth: 500,
        label: 'Medium'
      },
      {
        driverWidth: 879,
        label: 'Large'
      }
    ],
    'Mobile': [
      {
        driverWidth: 335,
        label: 'Small'
      },
      {
        driverWidth: 550,
        label: 'Large'
      }
    ],
    'Right Rail': [
      {
        driverWidth: 300,
        label: 'Right Rail'
      }
    ]
  };

function changeContainerWidth(device, index) {
    const { driverWidth } = driverSizes[device][index];
    const card = document.querySelector('.card');
    card.style.maxWidth = `${driverWidth}px`;
}