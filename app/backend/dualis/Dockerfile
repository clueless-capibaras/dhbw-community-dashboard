FROM alpine:latest
RUN apk add --no-cache python3 py3-pip bash
WORKDIR /
COPY requirements.txt ./
RUN pip install --upgrade pip
RUN pip install --no-cache-dir -r requirements.txt
RUN apk add curl
COPY server.py ./
RUN mkdir -p /opt/dualis-app
COPY NOTEN.sh /opt/dualis-app/NOTEN.sh
COPY MODULE.sh /opt/dualis-app/MODULE.sh
CMD [ "python", "/server.py" ]
