<?xml version="1.0" encoding="utf-8"?>
<soapenv:Envelope
    xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
    xmlns:pep="http://pep.base.nmsf.csi.it/"
    xmlns:urn="urn:PolicyEnforcerBase.policy.entity">
    <soapenv:Header />
    <soapenv:Body>
        <pep:identificaUserPassword>
            <pep:in0>${username}</pep:in0>
            <pep:in1>${password}</pep:in1>
        </pep:identificaUserPassword>
    </soapenv:Body>
</soapenv:Envelope>