<?xml version="1.0" encoding="utf-8"?>
<#--
  Simple SOAP service client for doing authentication and authorization operations using CSI-Piemonte IRIDE Service.
  Copyright (C) 2016  Regione Piemonte (www.regione.piemonte.it)

  This program is free software; you can redistribute it and/or modify
  it under the terms of the GNU General Public License as published by
  the Free Software Foundation; either version 2 of the License, or
  (at your option) any later version.

  This program is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.

  You should have received a copy of the GNU General Public License along
  with this program; if not, write to the Free Software Foundation, Inc.,
  51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
-->
<soapenv:Envelope
    xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
    xmlns:pep="http://pep.base.nmsf.csi.it/"
    xmlns:urn="urn:PolicyEnforcerBase.policy.entity">
    <soapenv:Header />
    <soapenv:Body>
        <pep:findUseCasesForPersonaInApplication>
            <pep:in0>
                <urn:codFiscale>${irideIdentity.codFiscale}</urn:codFiscale>
                <urn:nome>${irideIdentity.nome}</urn:nome>
                <urn:cognome>${irideIdentity.cognome}</urn:cognome>
                <urn:idProvider>${irideIdentity.idProvider}</urn:idProvider>
                <urn:timestamp>${irideIdentity.timestamp}</urn:timestamp>
                <urn:livelloAutenticazione>${irideIdentity.livelloAutenticazione}</urn:livelloAutenticazione>
                <urn:mac>${irideIdentity.mac}</urn:mac>
                <urn:rappresentazioneInterna>${irideIdentity.toInternalRepresentation()}</urn:rappresentazioneInterna>
            </pep:in0>
            <pep:in1>
                <urn:id>${application.id}</urn:id>
            </pep:in1>
        </pep:findUseCasesForPersonaInApplication>
    </soapenv:Body>
</soapenv:Envelope>