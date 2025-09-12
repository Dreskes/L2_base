
function ipv4Parser(ip, subnet) {
    const ipParts = ip.split('.').map(Number);
    const maskParts = subnet.split('.').map(Number);
    
    const network = ipParts.map((octet, i) => octet & maskParts[i]).join('.');
    const host = ipParts.map((octet, i) => octet & ~maskParts[i]).join('.');
    
    return [network, host];
}