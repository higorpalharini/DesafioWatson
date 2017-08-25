package br.com.matchbox;

import java.util.Map;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ibm.watson.developer_cloud.conversation.v1.ConversationService;
import com.ibm.watson.developer_cloud.conversation.v1.model.MessageRequest;
import com.ibm.watson.developer_cloud.conversation.v1.model.MessageResponse;

@RestController
@RequestMapping("/conversation")
public class ConversationRepository {

	private static final String USER = "f303de7d-9a16-422b-832c-188fc560b893";
	private static final String PASSWORD = "36FqdBIGEyiM";
	private static final String WORKSPACE = "1e57c1f9-2b68-422b-9cb7-27ccb1d5d45e";

	@RequestMapping(method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
	public Map<String, Object> conversation(@RequestBody Map<String, Object> conversation) {
		ConversationService service = new ConversationService("2017-05-26");
		service.setUsernameAndPassword(USER, PASSWORD);

		MessageRequest newMessage = new MessageRequest.Builder()
				.inputText(String.valueOf(conversation.get("text")))
				.context(conversation).build();
		
		MessageResponse response = service.message(WORKSPACE, newMessage).execute();
		conversation.put("conversation_id", response.getContext().get("conversation_id"));
		conversation.put("response", response.getOutput().get("text"));

		return conversation;
	}

}
