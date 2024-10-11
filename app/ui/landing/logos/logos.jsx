const Logos = () => { 
    const logos = [
      {
        name: 'Prime',
        url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/t2awrrfzdvmg1chnzyfr.svg',
      },
      {
        name: 'Trustpilot',
        url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/tkfspxqmjflfllbuqxsi.svg',
      },
      {
        name: 'Webflow',
        url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276560/logos/nymiivu48d5lywhf9rpf.svg',
      },
      {
        name: 'Airbnb',
        url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/pmblusboe7vkw8vxdknx.svg',
      },
      {
        name: 'Tina',
        url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276560/logos/afqhiygywyphuou6xtxc.svg',
      },
      {
        name: 'Stackoverflow',
        url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/ts1j4mkooxqmscgptafa.svg',
      },
      {
        name: 'mistral',
        url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/tyos2ayezryjskox3wzs.svg',
      },
    ];
  
    return (
      <div className="bg-white pb-10">
        <div className="w-full px-4 md:px-8 text-center">
          <h3 className="mb-6 text-2xl font-bold">Our Learners Work At</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {logos.map((logo, key) => (
              <img
                key={key}
                src={logo.url}
                className="h-10 w-28 opacity-50 filter grayscale"
                alt={logo.name}
              />
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Logos;
  