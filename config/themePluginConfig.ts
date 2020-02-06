const darkThemePublicStyles = {

};

export default {
  theme: [
    {
      key: 'dark',
      fileName: 'dark.css',
      theme: 'dark',
    },
    {
      key: 'dust',
      fileName: 'dust.css',
      modifyVars: {
        '@primary-color': '#F5222D',
        ...darkThemePublicStyles,
      },
    },
    {
      key: 'volcano',
      fileName: 'volcano.css',
      modifyVars: {
        '@primary-color': '#FA541C',
        ...darkThemePublicStyles,
      },
    },
    {
      key: 'sunset',
      fileName: 'sunset.css',
      modifyVars: {
        '@primary-color': '#FAAD14',
        ...darkThemePublicStyles,
      },
    },
    {
      key: 'cyan',
      fileName: 'cyan.css',
      modifyVars: {
        '@primary-color': '#13C2C2',
        ...darkThemePublicStyles,
      },
    },
    {
      key: 'green',
      fileName: 'green.css',
      modifyVars: {
        '@primary-color': '#52C41A',
        ...darkThemePublicStyles,
      },
    },
    {
      key: 'geekblue',
      fileName: 'geekblue.css',
      modifyVars: {
        '@primary-color': '#2F54EB',
        ...darkThemePublicStyles,
      },
    },
    {
      key: 'purple',
      fileName: 'purple.css',
      modifyVars: {
        '@primary-color': '#722ED1',
        ...darkThemePublicStyles,
      },
    },

    {
      key: 'dust',
      theme: 'dark',
      fileName: 'dark-dust.css',
      modifyVars: {
        '@primary-color': '#F5222D',
        ...darkThemePublicStyles,
      },
    },
    {
      key: 'volcano',
      theme: 'dark',
      fileName: 'dark-volcano.css',
      modifyVars: {
        '@primary-color': '#FA541C',
        ...darkThemePublicStyles,
      },
    },
    {
      key: 'sunset',
      theme: 'dark',
      fileName: 'dark-sunset.css',
      modifyVars: {
        '@primary-color': '#FAAD14',
        ...darkThemePublicStyles,
      },
    },
    {
      key: 'cyan',
      theme: 'dark',
      fileName: 'dark-cyan.css',
      modifyVars: {
        '@primary-color': '#13C2C2',
        ...darkThemePublicStyles,
      },
    },
    {
      key: 'green',
      theme: 'dark',
      fileName: 'dark-green.css',
      modifyVars: {
        '@primary-color': '#52C41A',
        ...darkThemePublicStyles,
      },
    },
    {
      key: 'geekblue',
      theme: 'dark',
      fileName: 'dark-geekblue.css',
      modifyVars: {
        '@primary-color': '#2F54EB',
        ...darkThemePublicStyles,
      },
    },
    {
      key: 'purple',
      theme: 'dark',
      fileName: 'dark-purple.css',
      modifyVars: {
        '@primary-color': '#722ED1',
        ...darkThemePublicStyles,
      },
    },
    {
      fileName: 'theme1.css',
      key:'theme1',
      theme: 'dark',
      modifyVars: {
        '@primary-color': '#13C2C2',
        '@menu-dark-color': '#324444',
        '@menu-dark-bg': '#5A5A5A',
        ...darkThemePublicStyles,
      },
    },
    {
      fileName: 'theme2.css',
      key:'theme2',
      theme: 'dark',
      modifyVars: {
        '@primary-color': '#4992BF',
        '@menu-dark-color': '#9B9B9B',
        '@menu-dark-bg': '#3A3A3A',
        ...darkThemePublicStyles,
      },
    },
  ],
};
