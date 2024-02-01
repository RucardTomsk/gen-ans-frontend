import React from "react";
import locale from "antd/locale/ru_RU";
import 'dayjs/locale/ru';
import {ConfigProvider} from "antd";

const ThemeProvider: React.FC<{children: React.ReactNode}> = ({children}) => {

    return (
        <ConfigProvider locale={locale} theme={{
            token: {
                colorPrimary: "rgb(14 116 144)",
                fontFamily: "Sirius, Arial, sans-serif",
            },
            components: {
                Button: {
                    fontWeight: 700
                }
            },
        }}>
            {children}
        </ConfigProvider>
    );
}

export default ThemeProvider;