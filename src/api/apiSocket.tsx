import io from "socket.io-client";
import { URL_SOCKET } from "./config";

export function ioSocket() {
  const socket = io(URL_SOCKET);
  try {
    return socket;
  } catch (err: any) {
    return err;
  }
}