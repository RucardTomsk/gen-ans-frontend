import React from "react";
import {Typography} from "antd";
import {DownloadOutlined, FileTextOutlined} from "@ant-design/icons";

interface Props {
    id: string,
    name: string,
    size: string,
    extension: string
}
const DocumentItem: React.FC<Props> = ({
        id,
        name,
        size,
        extension
    }) => {

    return (
        <div className={"flex py-1 justify-between items-center"}>
            <a
                target="_blank"
                href={"https://minio.freydin.space/test/01_Komande_Pravila_p1.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=PGP1NHO1AY8MHV3PRUO9/20231208/us-east-1/s3/aws4_request&X-Amz-Date=20231208T102034Z&X-Amz-Expires=604800&X-Amz-Security-Token=eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3NLZXkiOiJQR1AxTkhPMUFZOE1IVjNQUlVPOSIsImV4cCI6MTcwMjA3NDAwNiwicGFyZW50IjoicnVjYXJkIn0.2BYAdUE0U0Yc4Z-tkpwSM4vCsHpPk-ffHakfapWy5yHeKbuYF1MbC6N2QUdaaDCulY52dbQmKu02gzFmYFjxbQ&X-Amz-SignedHeaders=host&versionId=null&X-Amz-Signature=9dc647e59471e2e453a6096cc21520d2986faf4aa8aff2c7796f830f9ad93115"}
                className={"flex flex-1 justify-between text-black no-underline items-center cursor-pointer hover:bg-stone-50 transition rounded-md px-2"}>
                <div className={"flex gap-2"}>
                    <FileTextOutlined className={"text-2xl"}/>
                    <div className={"flex flex-col"}>
                        <Typography.Text underline strong>{name}</Typography.Text>
                        <Typography.Text type={"secondary"}>{`${extension.toUpperCase()} | ${size}`}</Typography.Text>
                    </div>
                </div>
                <DownloadOutlined />
            </a>
        </div>
    )
}

export default DocumentItem